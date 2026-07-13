import { Eye, LockKeyhole, Mail, TrendingUp } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../services/authApi'
import { useState } from 'react'
import CircleLoading from '../../../components/CircleLoading'

const FeatureIllustration = () => (
  <div className="relative mt-10 h-52 w-full max-w-sm sm:h-60 lg:mt-14">
    <div className="absolute inset-x-0 bottom-0 mx-auto h-44 w-72 rounded-[45%] bg-[#ede9ff] blur-sm sm:h-52 sm:w-80" />
    <div className="absolute left-6 top-7 h-32 w-52 rotate-[-2deg] rounded-lg border border-violet-200 bg-white/80 shadow-2xl shadow-violet-200/70 backdrop-blur sm:h-36 sm:w-60">
      <div className="flex h-6 items-center gap-1 rounded-t-lg bg-violet-500 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
      </div>
      <div className="relative h-[calc(100%-1.5rem)] p-5">
        <div className="absolute bottom-5 left-6 h-9 w-4 rounded bg-violet-400" />
        <div className="absolute bottom-5 left-12 h-14 w-4 rounded bg-violet-500/80" />
        <div className="absolute bottom-5 left-[72px] h-20 w-4 rounded bg-violet-400/70" />
        <div className="absolute bottom-5 left-[96px] h-24 w-4 rounded bg-violet-500" />
        <div className="absolute left-6 top-14 h-14 w-40">
          <div className="absolute left-0 top-8 h-1 w-10 rotate-[-14deg] rounded bg-violet-500" />
          <div className="absolute left-9 top-6 h-1 w-10 rotate-[18deg] rounded bg-violet-500" />
          <div className="absolute left-[74px] top-4 h-1 w-10 rotate-[-22deg] rounded bg-violet-500" />
          <div className="absolute left-[110px] top-0 h-1 w-10 rotate-[-32deg] rounded bg-violet-500" />
        </div>
      </div>
    </div>
    <div className="absolute bottom-1 left-28 h-28 w-24 rounded-xl border border-violet-100 bg-white/90 p-4 shadow-xl shadow-violet-200/60 sm:left-32">
      {[0, 1, 2].map((item) => (
        <div className="mb-3 flex items-center gap-2" key={item}>
          <span className="grid h-5 w-5 place-items-center rounded-full bg-violet-100 text-[10px] font-black text-violet-600">✓</span>
          <span className="h-2 flex-1 rounded bg-violet-100" />
        </div>
      ))}
    </div>
    <div className="absolute right-7 top-10 grid h-20 w-20 place-items-center rounded-full bg-white/80 shadow-xl shadow-violet-200/70">
      <div className="grid h-14 w-14 place-items-center rounded-full border-[7px] border-violet-500 border-l-violet-100 text-sm font-bold text-violet-600">
        75%
      </div>
    </div>
    <div className="absolute bottom-0 right-3 h-16 w-10">
      <span className="absolute bottom-0 left-3 h-10 w-4 rounded-t-full bg-violet-400/60" />
      <span className="absolute bottom-8 left-0 h-8 w-3 rotate-[-35deg] rounded-full bg-violet-500/50" />
      <span className="absolute bottom-8 right-0 h-8 w-3 rotate-[35deg] rounded-full bg-violet-500/50" />
    </div>
  </div>
)

const Login = () => {
  const [login,{ isLoading, isSuccess, isError, error }] = useLoginMutation();
  const [loginForm, setLoginForm] = useState({ email: '', password:'' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  const handleLogin = async (e) => { 
    e.preventDefault();   
    console.log(error);
    
    try {
         const response  = await login(loginForm).unwrap();
         localStorage.setItem("token", response.token);
         navigate('/');    
    } catch (error) {
       console.log(error);
       
    }

  }
  if(isLoading){
      return <CircleLoading />
  }
  return (
    <main className="min-h-screen bg-white px-4 py-5 text-slate-950 sm:px-7 lg:px-10">
      <section className="mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-7xl overflow-hidden rounded-xl border border-violet-200 bg-gradient-to-br from-white via-[#faf9ff] to-[#f2efff] shadow-[0_24px_70px_rgba(79,70,229,0.10)] lg:grid-cols-[1fr_0.92fr]">
        <div className="relative hidden min-h-140 flex-col justify-between p-10 md:flex lg:p-14">
          <div className="absolute bottom-10 left-10 grid grid-cols-5 gap-3 opacity-45">
            {Array.from({ length: 25 }).map((_, index) => (
              <span className="h-1 w-1 rounded-full bg-violet-400" key={index} />
            ))}
          </div>
          <Link className="relative z-10 flex w-fit items-center gap-2 text-lg font-extrabold" to="/">
            <TrendingUp className="h-7 w-7 text-violet-600" />
            SkillTrack
          </Link>
          <div className="relative z-10">
            <h1 className="max-w-md text-4xl font-extrabold leading-tight tracking-normal lg:text-5xl">
              Suivez vos competences,
              <span className="block text-violet-600">atteignez vos objectifs.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-slate-600">
              Organisez vos apprentissages, suivez vos progres et devenez la meilleure version de vous-meme.
            </p>
            <FeatureIllustration />
          </div>
        </div>

        <div className="flex min-h-[calc(100vh-2.5rem)] items-center justify-center px-4 py-7 sm:px-8 md:min-h-[560px] lg:px-14">
          <div className="w-full max-w-md rounded-2xl bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] ring-1 ring-slate-100 sm:p-9">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-violet-100 text-violet-600 ring-1 ring-violet-200">
              <LockKeyhole className="h-7 w-7" />
            </div>
            <div className="mt-5 text-center">
              <h2 className="text-2xl font-extrabold">Connexion</h2>
              <p className="mt-2 text-sm leading-5 text-slate-500">
                Bienvenue de retour ! Connectez-vous a votre compte.
              </p>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleLogin}>
              {isError ? <div className='text-white bg-red-400 mb-2 p-3 rounded'>{error.data.msg}</div>:''}
              <label className="block">
                <span className="text-sm font-bold text-slate-800">Email</span>
                <span className="mt-2 flex h-12 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-slate-400 shadow-sm focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-100">
                  <Mail className="h-4 w-4" />
                  <input className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" placeholder="votre@email.com" type="email" name='email' onChange={handleChange} />
                </span>
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-800">Mot de passe</span>
                <span className="mt-2 flex h-12 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-slate-400 shadow-sm focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-100">
                  <LockKeyhole className="h-4 w-4" />
                  <input className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" placeholder="••••••••••" type="password" name='password' onChange={handleChange} />
                  <Eye className="h-4 w-4 shrink-0" />
                </span>
              </label>

              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input className="h-4 w-4 rounded border-slate-300 accent-violet-600" type="checkbox" />
                  Se souvenir de moi
                </label>
                <a className="font-semibold text-violet-600 hover:text-violet-700" href="#">
                  Mot de passe oublie ?
                </a>
              </div>

              <button className="h-12 w-full rounded-lg bg-violet-600 text-sm font-extrabold text-white shadow-lg shadow-violet-300 transition hover:bg-violet-700" type="submit">
                Se connecter
              </button>
            </form>

            <div className="my-7 flex items-center gap-4 text-sm text-slate-500">
              <span className="h-px flex-1 bg-slate-200" />
              ou continuer avec
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-bold shadow-sm transition hover:bg-slate-50" type="button">
                <FontAwesomeIcon icon={faGoogle} className="h-5 w-5 text-red-500" />
                Google
              </button>
              <button className="flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-bold shadow-sm transition hover:bg-slate-50" type="button">
                <FontAwesomeIcon icon={faGithub} className="h-5 w-5 text-slate-950" />
                GitHub
              </button>
            </div>

            <p className="mt-7 text-center text-sm text-slate-600">
              Pas encore de compte ?{' '}
              <Link className="font-bold text-violet-600 hover:text-violet-700" to="/register">
                Creer un compte
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login
