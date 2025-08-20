import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function ErrorUnauthorized() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-200">
      <motion.div 
        className="flex flex-col items-center bg-white/80 rounded-xl shadow-xl px-8 py-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
      >
        <span className="rounded-full bg-red-100 p-4 mb-4">
          <AlertTriangle className="text-red-500 w-12 h-12" />
        </span>
        <h1 className="font-bold text-3xl text-blue-900 mb-2" style={{fontFamily: 'Nunito'}}>Unauthorized Access</h1>
        <p className="mb-6 text-slate-700 max-w-md text-center">Hold up! It looks like you don’t have permission to access this page. Please log in with the correct credentials to continue your secure journey with us.</p>
        <Button id="unauthorized-login-btn" asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
          <Link to="/login">Return to Login</Link>
        </Button>
      </motion.div>
    </div>
  )
}
