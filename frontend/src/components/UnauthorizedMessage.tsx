import { AlertTriangle } from "lucide-react"
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function UnauthorizedMessage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center p-8 rounded-xl bg-white shadow-lg max-w-md mx-auto mt-20 border border-gray-200 text-center"
      >
      <div className="bg-red-100 rounded-full p-4 mb-4">
        <AlertTriangle className="text-red-600 w-10 h-10" />
      </div>
      <h1 className="font-bold text-2xl mb-2 text-gray-900" style={{fontFamily: 'Nunito'}}>Unauthorized Access</h1>
      <p className="text-gray-700 mb-6">Whoa there, health hero! 🔒<br />
        For your privacy and safety, you need to log in to access this page.
      </p>
      <Button id="login-btn" asChild className="w-full">
        <Link to="/login">Return to Login</Link>
      </Button>
    </motion.div>
  )
}
