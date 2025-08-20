import { MfaVerificationForm } from '@/components/MfaVerificationForm'
import { motion } from 'framer-motion'

export function VerifyMfaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#cbd5e1] to-white flex flex-col justify-center items-center">
      <motion.div
        className="w-full flex flex-col justify-center items-center mt-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src="/branding/assets/logo-0.png" className="h-20 w-20 mb-2 drop-shadow-md" />
        <h1 className="font-nunito font-bold text-3xl text-primary mb-2 tracking-tight drop-shadow">HIPAA Secure Patient Portal</h1>
        <p className="text-slate-700 mb-8 text-center max-w-sm">Safety first! For your protection, please complete multi-factor authentication to access your secure health dashboard.</p>
        <MfaVerificationForm />
      </motion.div>
    </div>
  )
}
