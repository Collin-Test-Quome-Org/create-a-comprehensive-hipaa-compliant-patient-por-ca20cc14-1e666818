import { Button } from '@/components/ui/button'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { SearchX } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function NotFoundPageContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <Alert className="flex flex-col items-center p-8">
          <SearchX className="w-12 h-12 text-primary mb-4" />
          <AlertTitle className="font-bold text-2xl mb-2">404: Page Not Found</AlertTitle>
          <AlertDescription className="text-base text-center mb-6">
            It looks like you’ve taken a detour from the secure path.<br />
            Don’t worry! Let’s guide you safely back to the HIPAA Secure Patient Portal home.
          </AlertDescription>
          <Button asChild id="notfound-home-btn" className="w-40">
            <Link to="/">Go to Home</Link>
          </Button>
        </Alert>
      </motion.div>
    </div>
  )
}
