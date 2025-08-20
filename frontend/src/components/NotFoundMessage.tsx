import { Ghost } from "lucide-react"
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function NotFoundMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center p-8 rounded-xl bg-white shadow-lg max-w-md mx-auto mt-20 border border-gray-200 text-center"
    >
      <div className="bg-slate-100 rounded-full p-4 mb-4">
        <Ghost className="text-blue-700 w-10 h-10" />
      </div>
      <h1 className="font-bold text-2xl mb-2 text-gray-900" style={{fontFamily: 'Nunito'}}>404: Page Not Found</h1>
      <p className="text-gray-700 mb-6">Looks like this page drifted into the secure void. <br />Let’s get you back on track!</p>
      <Button id="home-btn" asChild className="w-full">
        <Link to="/">Go to Home</Link>
      </Button>
    </motion.div>
  )
}
