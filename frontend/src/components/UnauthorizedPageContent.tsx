import { Button } from '@/components/ui/button'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function UnauthorizedPageContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <Alert variant="destructive" className="flex flex-col items-center p-8">
          <Lock className="w-12 h-12 text-primary mb-4" />
          <AlertTitle className="font-bold text-2xl mb-2">Access Restricted</AlertTitle>
          <AlertDescription className="text-base text-center mb-6">
            Oops! You do not have permission to view this page.<br />
            Please log in with the correct account to access HIPAA Secure Patient Portal features.
          </AlertDescription>
          <Button asChild id="unauthorized-login-btn" className="w-40">
            <Link to="/login">Return to Login</Link>
          </Button>
        </Alert>
      </motion.div>
    </div>
  )
}
