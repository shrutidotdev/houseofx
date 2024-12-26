import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='mt-20 text-sm sm:text-base max-w-4xl mx-auto text-center'>
      <h2 className='className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303]"
'>404Not Found</h2>
      <p>Could not find requested resource</p>
      <Button asChild className="mt-10 w-56  px-4 py-7 rounded-full bg-gradient-to-r from-[#19ff4b] to-green-600 text-white text-lg font-semibold hover:from-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
          <Link href="/">Back to home</Link>
      </Button>
    </div>
  )
}