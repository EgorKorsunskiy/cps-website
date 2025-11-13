import { Code2, Users, Trophy, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';

export function Home() {
  const features = [
    {
      icon: Code2,
      title: 'Practice Problems',
      description: 'Access curated problems from various competitive programming platforms.',
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Discuss solutions, share insights, and learn from fellow programmers.',
    },
    {
      icon: Trophy,
      title: 'Competitions',
      description: 'Participate in weekly contests and climb the leaderboard.',
    },
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Study guides, tutorials, and resources for all skill levels.',
    },
  ];

  const stats = [
    { label: 'Active Members', value: '250+' },
    { label: 'Problems Solved', value: '1,200+' },
    { label: 'Weekly Contests', value: '3' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-6">
          <Trophy className="w-4 h-4" />
          <span>Welcome to CompSci Society</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl mb-6 text-slate-100">
          Master Competitive
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Programming
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Join our community of passionate programmers. Practice, compete, and grow your problem-solving skills together.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/tasks">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Practicing
            </Button>
          </Link>
          <Link href="/schedule">
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              View Schedule
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl text-blue-400 mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl text-center mb-12 text-slate-100">
          What We Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-slate-100">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* About Section */}
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
