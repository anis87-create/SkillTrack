import { Eye, LockKeyhole, Mail, TrendingUp, User, UserRoundPlus } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../services/authApi'
import { useState } from 'react'


const FeatureIllustration = () => (
  <div className="relative mt-10 h-52 w-full max-w-sm sm:h-60 lg:mt-14">
    <div className="absolute inset-x-0 bottom-0 mx-auto h-44 w-72 rounded-[45%] bg-emerald-100 blur-sm sm:h-52 sm:w-80" />
    <div className="absolute left-6 top-7 h-32 w-52 rotate-[-2deg] rounded-lg border border-emerald-200 bg-white/80 shadow-2xl shadow-emerald-200/70 backdrop-blur sm:h-36 sm:w-60">
      <div className="flex h-6 items-center gap-1 rounded-t-lg bg-emerald-500 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
      </div>
      <div className="relative h-[calc(100%-1.5rem)] p-5">
        <div className="absolute bottom-5 left-6 h-9 w-4 rounded bg-emerald-400" />
        <div className="absolute bottom-5 left-12 h-14 w-4 rounded bg-emerald-500/80" />
        <div className="absolute bottom-5 left-[72px] h-20 w-4 rounded bg-emerald-400/70" />
        <div className="absolute bottom-5 left-[96px] h-24 w-4 rounded bg-emerald-500" />
      </div>
    </div>
    <div className="absolute bottom-1 left-28 h-28 w-24 rounded-xl border border-emerald-100 bg-white/90 p-4 shadow-xl shadow-emerald-200/60 sm:left-32">
      {[0, 1, 2].map((item) => (
        <div className="mb-3 flex items-center gap-2" key={item}>
          <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-[10px] font-black text-emerald-600">✓</span>
          <span className="h-2 flex-1 rounded bg-emerald-100" />
        </div>
      ))}
    </div>
    <div className="absolute right-7 top-10 grid h-20 w-20 place-items-center rounded-full bg-white/80 shadow-xl shadow-emerald-200/70">
      <div className="grid h-14 w-14 place-items-center rounded-full border-[7px] border-emerald-500 border-l-emerald-100 text-sm font-bold text-emerald-600">
        75%
      </div>
    </div>
    <div className="absolute bottom-0 right-3 h-16 w-10">
      <span className="absolute bottom-0 left-3 h-10 w-4 rounded-t-full bg-emerald-400/60" />
      <span className="absolute bottom-8 left-0 h-8 w-3 rotate-[-35deg] rounded-full bg-emerald-500/50" />
      <span className="absolute bottom-8 right-0 h-8 w-3 rotate-[35deg] rounded-full bg-emerald-500/50" />
    </div>
  </div>
)

const Register = () => {
  const [register, {isLoading, isSuccess, isError}] = useRegisterMutation();
  const [registerForm, setRegisterForm] = useState({
    name:'',
    email:'',
    password:'',
    confirmedPassword:''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const getErrorText = (errorField) => {
    if (!errorField) return '';
    if (Array.isArray(errorField)) return errorField.join(' ');
    if (typeof errorField === 'object' && errorField?.message) return errorField.message;
    return String(errorField);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
     setRegisterForm(prevData => ({
      ...prevData,
      [name]: value
     }));
  }

  const handleSignup = async (e) => {
     e.preventDefault();
     try {
      const response = await register(registerForm).unwrap();
      localStorage.setItem('token', response.token);
      navigate('/');
     } catch (error) {
      setErrors(error.data.errors);
     }     
  }
  if(isLoading){
    return <CircleLoading />
  }

  return (
    <main className="min-h-screen bg-white px-4 py-5 text-slate-950 sm:px-7 lg:px-10">
      <section className="mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-7xl overflow-hidden rounded-xl border border-emerald-200 bg-gradient-to-br from-white via-[#f8fffd] to-[#eafff7] shadow-[0_24px_70px_rgba(16,185,129,0.10)] lg:grid-cols-[1fr_0.92fr]">
        <div className="relative hidden min-h-[560px] flex-col justify-between p-10 md:flex lg:p-14">
          <div className="absolute bottom-10 left-10 grid grid-cols-5 gap-3 opacity-45">
            {Array.from({ length: 25 }).map((_, index) => (
              <span className="h-1 w-1 rounded-full bg-emerald-400" key={index} />
            ))}
          </div>
          <Link className="relative z-10 flex w-fit items-center gap-2 text-lg font-extrabold" to="/">
            <TrendingUp className="h-7 w-7 text-emerald-600" />
            SkillTrack
          </Link>
          <div className="relative z-10">
            <h1 className="max-w-md text-4xl font-extrabold leading-tight tracking-normal lg:text-5xl">
              Suivez vos competences,
              <span className="block text-emerald-600">atteignez vos objectifs.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-slate-600">
              Organisez vos apprentissages, suivez vos progres et devenez la meilleure version de vous-meme.
            </p>
            <FeatureIllustration />
          </div>
        </div>

        <div className="flex min-h-[calc(100vh-2.5rem)] items-center justify-center px-4 py-7 sm:px-8 md:min-h-[560px] lg:px-14">
          <div className="w-full max-w-md rounded-2xl bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] ring-1 ring-slate-100 sm:p-9">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 ring-1 ring-emerald-200">
              <UserRoundPlus className="h-7 w-7" />
            </div>
            <div className="mt-5 text-center">
              <h2 className="text-2xl font-extrabold">Creer un compte</h2>
              <p className="mt-2 text-sm leading-5 text-slate-500">
                Rejoignez SkillTrack et commencez votre progression.
              </p>
            </div>

            <form className="mt-7 space-y-4" onSubmit={handleSignup}>
              <label className="block">
                <span className="text-sm font-bold text-slate-800">Nom complet</span>
                <span className={`mt-2 flex h-11 items-center gap-3 rounded-lg border px-4 text-slate-400 shadow-sm focus-within:ring-4 ${errors.name ? 'border-red-500 bg-rose-50 focus-within:border-red-500 focus-within:ring-rose-100' : 'border-slate-200 bg-white focus-within:border-emerald-400 focus-within:ring-emerald-100'}`}>
                  <User className="h-4 w-4" />
                  <input className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" placeholder="Votre nom complet" type="text" name='name' onChange={handleChange}  />
                </span>
                {errors.name && <span className="mt-2 block text-xs font-medium text-red-600">{getErrorText(errors.name)}</span>}
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-800">Email</span>
                <span className={`mt-2 flex h-11 items-center gap-3 rounded-lg border px-4 text-slate-400 shadow-sm focus-within:ring-4 ${errors.email ? 'border-red-500 bg-rose-50 focus-within:border-red-500 focus-within:ring-rose-100' : 'border-slate-200 bg-white focus-within:border-emerald-400 focus-within:ring-emerald-100'}`}>
                  <Mail className="h-4 w-4" />
                  <input className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" placeholder="votre@email.com" type="email" name='email' onChange={handleChange}  />
                </span>
                {errors.email && <span className="mt-2 block text-xs font-medium text-red-600">{getErrorText(errors.email)}</span>}
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-800">Mot de passe</span>
                <span className={`mt-2 flex h-11 items-center gap-3 rounded-lg border px-4 text-slate-400 shadow-sm focus-within:ring-4 ${errors.password ? 'border-red-500 bg-rose-50 focus-within:border-red-500 focus-within:ring-rose-100' : 'border-slate-200 bg-white focus-within:border-emerald-400 focus-within:ring-emerald-100'}`}>
                  <LockKeyhole className="h-4 w-4" />
                  <input className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" placeholder="••••••••••" type="password" name='password' onChange={handleChange}  />
                  <Eye className="h-4 w-4 shrink-0" />
                </span>
                {errors.password && <span className="mt-2 block text-xs font-medium text-red-600">{getErrorText(errors.password)}</span>}
              </label>

              <label className="block">
                <span className="mt-2 text-sm font-bold text-slate-800">Confirmer le mot de passe</span>
                <span className={`mt-2 flex h-11 items-center gap-3 rounded-lg border px-4 text-slate-400 shadow-sm focus-within:ring-4 ${errors.confirmedPassword ? 'border-red-500 bg-rose-50 focus-within:border-red-500 focus-within:ring-rose-100' : 'border-slate-200 bg-white focus-within:border-emerald-400 focus-within:ring-emerald-100'}`}>
                  <LockKeyhole className="h-4 w-4" />
                  <input className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" placeholder="••••••••••" type="password" name='confirmedPassword' onChange={handleChange} />
                  <Eye className="h-4 w-4 shrink-0" />
                </span>
                {errors.confirmedPassword && <span className="mt-2 block text-xs font-medium text-red-600">{getErrorText(errors.confirmedPassword)}</span>}
              </label>

              <label className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                <input className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-emerald-600" type="checkbox" />
                <span>
                  J'accepte les{' '}
                  <a className="font-semibold text-emerald-600 underline underline-offset-2" href="#">
                    Conditions d'utilisation
                  </a>{' '}
                  et la{' '}
                  <a className="font-semibold text-emerald-600 underline underline-offset-2" href="#">
                    Politique de confidentialite
                  </a>
                  .
                </span>
              </label>

              <button className="h-12 w-full rounded-lg bg-emerald-600 text-sm font-extrabold text-white shadow-lg shadow-emerald-300 transition hover:bg-emerald-700" type="submit">
                Creer mon compte
              </button>
            </form>

            <div className="my-6 flex items-center gap-4 text-sm text-slate-500">
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

            <p className="mt-6 text-center text-sm text-slate-600">
              Deja un compte ?{' '}
              <Link className="font-bold text-emerald-600 hover:text-emerald-700" to="/login">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register
