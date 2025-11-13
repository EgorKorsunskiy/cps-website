import { Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';
import Image from 'next/image';
import discordIcon from '../../public/discord.svg'

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl mb-6 text-slate-100">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 leading-normal">
            Competitive Programming
          </span>
          Club
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Join our community of passionate programmers. Practice, compete, and grow your problem-solving skills together.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://www.instagram.com/kulcpsociety/" target='_blank'>
          <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            <Instagram />
              Instagram
            </Button>
          </a>
          <a href="https://discord.gg/4VvsDYNk" target='_blank'>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <Image src={discordIcon} alt='discord' width={20} height={20} className='fill-white' />
              Discord
            </Button>
          </a>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">About Our Society</CardTitle>
        </CardHeader>
        <CardContent className="text-slate-300 space-y-4">
          <p>
            The Competitive Programming Society is dedicated to fostering a community of problem solvers and algorithmic thinkers. 
            Whether you're preparing for coding interviews, participating in contests like ICPC, or simply love the challenge of solving complex problems, 
            you'll find a welcoming community here.
          </p>
          <p>
            We host regular practice sessions, workshops on advanced algorithms and data structures, and participate in various competitive programming contests. 
            Join us to improve your skills, meet like-minded students, and have fun solving challenging problems!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
