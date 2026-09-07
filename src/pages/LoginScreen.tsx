import { useState, useEffect, FormEvent } from 'react';
import { Shield, ChevronRight, User as UserIcon, Key } from 'lucide-react';
import { User as UserType } from '../types';
import { LiveClock } from '../components/Shared/LiveClock';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, browserSessionPersistence, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../services/firebase';
import { MORAL_QUOTES } from '../utils/constants';

interface LoginScreenProps {
  onLogin: (user: UserType) => void;
  users: UserType[];
}

export function LoginScreen({ onLogin, users }: LoginScreenProps) {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [password, setPassword] = useState('');
  const [customEmail, setCustomEmail] = useState('');
  const [needsCustomEmail, setNeedsCustomEmail] = useState(false);
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const activeUsers = users.filter(u => u.enabled !== false); // fallback to true if undefined
  
  const [dailyQuote, setDailyQuote] = useState('');
  useEffect(() => {
    setDailyQuote(MORAL_QUOTES[Math.floor(Math.random() * MORAL_QUOTES.length)]);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!selectedUser) {
      setError('Please select a profile to continue');
      return;
    }

    setIsLoggingIn(true);
    try {
      await setPersistence(auth, keepSignedIn ? browserLocalPersistence : browserSessionPersistence);
      let emailToTry = customEmail || selectedUser.email || `${selectedUser.id.toLowerCase().replace(/[^a-z0-9]/g, '')}@mliju.local`;

      await signInWithEmailAndPassword(auth, emailToTry, password);
      onLogin(selectedUser);
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found') {
        if (!needsCustomEmail && !customEmail) {
          setNeedsCustomEmail(true);
          setError('If you use a custom email address, please enter it below.');
        } else {
          setError('Incorrect Email or Password. Please try again.');
        }
      } else {
        setError('Login Failed: ' + err.message);
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-start items-center font-['Outfit'] bg-[#F4F7FB] text-slate-800">
      
      {/* Subtle light ambient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/40 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-200/30 blur-[150px]"></div>
      </div>



      <div className="flex-1 w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 z-10">
        
        {/* Quote Above Container Directly on Background */}
        {dailyQuote && (
          <div className="w-full max-w-5xl mx-auto mb-10 text-center px-4">
            <p 
              className="text-sm md:text-base text-slate-700 tracking-wide leading-relaxed" 
              style={{ 
                fontFamily: '"Anek Malayalam", sans-serif',
                fontOpticalSizing: 'auto',
                fontWeight: 500,
                fontStyle: 'normal',
                fontVariationSettings: '"wdth" 100'
              }}
            >
              {dailyQuote.split(' - ')[0]}
              {dailyQuote.split(' - ')[1] && (
                <>
                  <br />
                  <span className="text-xs md:text-sm text-slate-500 opacity-90 mt-0.5 inline-block">
                    - {dailyQuote.split(' - ')[1]}
                  </span>
                </>
              )}
            </p>
          </div>
        )}

        {/* Main Login Card Wrapper */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-white max-w-5xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[450px] transition-all">
          
          {/* Left Column: Logo Display */}
          <div className="md:col-span-5 col-span-1 bg-white relative overflow-hidden min-h-[200px] md:min-h-[300px] flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="absolute inset-0 w-full h-full object-contain md:object-cover object-bottom md:object-center px-4 pt-4 pb-0 md:p-0" />
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 px-6 pb-6 pt-2 sm:p-10 md:p-12 flex flex-col justify-center bg-white relative">
            <div className="w-full flex justify-center md:absolute md:top-6 md:right-6 md:w-auto mb-6 md:mb-0 mt-2 md:mt-0">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-[12px] sm:text-xs text-slate-600 shadow-sm transition-all" style={{ fontFamily: 'inherit' }}>
                <LiveClock className="text-slate-600 flex items-center justify-center gap-1.5" />
              </div>
            </div>

            <div className="w-full max-w-md mx-auto mt-2 sm:mt-0">
              
              {/* Profile Cards Selection Grid */}
              {!selectedUser ? (
                <div className="space-y-4">
                  <div className="mb-4 text-left">
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                      Sign In
                    </h3>
                    <p className="text-slate-500 mt-1 text-sm font-medium">Select your profile to access the system</p>
                  </div>

                  {/* Profile Cards list - exact match with 2-column gap-2 spacing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeUsers.map(u => {
                      const isAdmin = u.role === 'admin';
                      return (
                        <button
                          key={u.id}
                          type="button"
                          onClick={() => {
                            setSelectedUser(u);
                            setPassword('');
                            setError('');
                          }}
                          className={`w-full p-4 flex items-center gap-3 border rounded-2xl text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] cursor-pointer group ${
                            isAdmin 
                              ? 'bg-blue-50/50 border-blue-100 hover:bg-blue-50 hover:border-blue-200' 
                              : 'bg-slate-50 border-slate-100 hover:bg-slate-100'
                          }`}
                        >
                          {/* Profile rounded icon area */}
                          <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110 ${
                            isAdmin ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white' : 'bg-white text-slate-400 border border-slate-200'
                          }`}>
                            {isAdmin ? <Shield size={20} /> : <UserIcon size={20} />}
                          </div>
                          
                          {/* Profile name and tag details */}
                          <div className="flex-1 min-w-0">
                            <p className="text-base font-bold text-slate-800 tracking-tight whitespace-normal break-words leading-tight mb-0.5">
                              {u.name}
                            </p>
                            <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest block">
                              {isAdmin ? 'Super Admin' : 'Officer Login'}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* Password Entrance Frame (Exact Match to Screens) */
                <div className="space-y-6 animate-in fade-in duration-300">
                  
                  {/* Pill Back Button */}
                  <div className="flex justify-start">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedUser(null);
                        setPassword('');
                        setError('');
                        setResetSent(false);
                      }}
                      className="bg-slate-50 hover:bg-slate-100 text-slate-600 transition-all px-4 py-2 rounded-xl text-xs font-bold cursor-pointer tracking-wide border border-slate-200 shadow-sm"
                    >
                      ← Back
                    </button>
                  </div>

                  {/* Profile Indicator Card */}
                  <div className="bg-slate-50 border border-slate-100 p-5 rounded-[28px] flex items-center gap-5 shadow-sm">
                    <div className="h-14 w-14 rounded-[20px] flex items-center justify-center shrink-0 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
                      {selectedUser.role === 'admin' ? <Shield size={24} /> : <UserIcon size={24} />}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-slate-800 text-lg leading-tight">
                        {selectedUser.name}
                      </h4>
                      <p className="text-sm font-medium text-slate-500 mt-1">
                        Enter passcode
                      </p>
                    </div>
                  </div>

                  {/* Error Notification Alert */}
                  {error && (
                    <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl text-sm font-semibold leading-normal shadow-sm">
                      {error}
                    </div>
                  )}

                  {/* Password Entry Area */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {needsCustomEmail && (
                      <div className="relative group">
                        <input 
                          type="email" 
                          placeholder="Your email address" 
                          value={customEmail} 
                          onChange={e => {
                            setCustomEmail(e.target.value);
                            setError('');
                          }}
                          className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[24px] font-bold text-slate-800 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg tracking-widest text-center sm:text-left shadow-inner placeholder:text-slate-300" 
                        />
                      </div>
                    )}
                    <div className="relative group">
                      <input 
                        type={showPass ? 'text' : 'password'} 
                        placeholder="••••••••••••" 
                        value={password} 
                        onChange={e => {
                          setPassword(e.target.value);
                          setError('');
                        }}
                        autoFocus={!needsCustomEmail}
                        className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[24px] font-bold text-slate-800 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg tracking-widest text-center sm:text-left shadow-inner placeholder:text-slate-300" 
                      />
                      
                      {password && (
                        <button 
                          type="button" 
                          onClick={() => setShowPass(!showPass)} 
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-bold text-blue-600 hover:text-blue-700 outline-none cursor-pointer px-3 py-1 bg-blue-50 rounded-lg"
                        >
                          {showPass ? 'HIDE' : 'SHOW'}
                        </button>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center px-2">
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          id="keepSignedIn" 
                          checked={keepSignedIn} 
                          onChange={(e) => setKeepSignedIn(e.target.checked)}
                          className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                        <label htmlFor="keepSignedIn" className="text-sm font-bold text-slate-500 cursor-pointer select-none">
                          Keep me signed in
                        </label>
                      </div>
                      
                      <button
                        type="button"
                        disabled={isResetting || resetSent}
                        onClick={async () => {
                          if (!selectedUser?.email) {
                            setError('No email address registered for this account. Please ask the Admin to update your profile.');
                            return;
                          }
                          setIsResetting(true);
                          setError('');
                          try {
                            await sendPasswordResetEmail(auth, selectedUser.email);
                            setResetSent(true);
                            alert(`A password reset link has been sent to ${selectedUser.email}. Please check your inbox (and spam folder).`);
                          } catch (err: any) {
                            console.error("Reset Password Error:", err);
                            if (err.code === 'auth/user-not-found') {
                              setError('This account does not exist in the authentication system.');
                            } else {
                              setError(`Failed: ${err.message}`);
                            }
                          } finally {
                            setIsResetting(false);
                          }
                        }}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                      >
                        {resetSent ? 'Email Sent!' : isResetting ? 'Sending...' : 'Forgot Password?'}
                      </button>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isLoggingIn}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-[20px] transition-all transform hover:-translate-y-0.5 shadow-[0_12px_24px_rgba(37,99,235,0.25)] flex items-center justify-center gap-3 text-lg disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {isLoggingIn ? 'Verifying...' : 'Sign In Securely'} <ChevronRight size={20} />
                    </button>
                  </form>

                </div>
              )}

              {/* Spacing alignment */}
              <div className="pt-2"></div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

