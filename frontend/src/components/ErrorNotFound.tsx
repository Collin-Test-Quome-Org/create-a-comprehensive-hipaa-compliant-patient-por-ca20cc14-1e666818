import { Button } from '@/components/ui/button'
import { Ghost } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function ErrorNotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-slate-100">
      <motion.div
        className="flex flex-col items-center bg-white/90 rounded-xl shadow-lg px-8 py-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <span className="rounded-full bg-blue-100 p-4 mb-4">
          <Ghost className="text-blue-500 w-12 h-12" />
        </span>
        <h1 className="font-bold text-3xl text-blue-900 mb-2" style={{fontFamily: 'Nunito'}}>404: Page Not Found</h1>
        <p className="mb-6 text-slate-700 text-center max-w-md">The page you're looking for is floating in cyberspace. Let's get you back to secure ground.</p>
        <Button id="notfound-home-btn" asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
      </motion.div>
    </div>
  )
}
