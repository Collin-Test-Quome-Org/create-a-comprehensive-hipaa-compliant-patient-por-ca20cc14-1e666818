import { Button } from '@/components/ui/button'
import { ShieldX } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function ErrorUnauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-secondary p-8 rounded-xl shadow-lg mx-auto max-w-lg mt-12">
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 10 }}
        className="mb-4"
      >
        <ShieldX size={64} className="text-primary" />
      </motion.div>
      <h1 className="text-3xl font-bold mb-2 text-primary font-nunito">Access Restricted</h1>
      <p className="text-lg text-gray-700 mb-6 text-center font-nunito">
        Oops! It looks like you don’t have permission to view this page.<br />
        Please log in with authorized credentials.
      </p>
      <Button id="unauthorized-login-btn" asChild>
        <Link to="/login">Return to Login</Link>
      </Button>
    </div>
  )
}
