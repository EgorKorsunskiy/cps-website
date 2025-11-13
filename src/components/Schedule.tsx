import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Schedule() {
  const events = [
    {
      id: 1,
      title: 'Weekly Practice Session',
      type: 'Practice',
      day: 'Monday',
      time: '6:00 PM - 8:00 PM',
      location: 'CS Building, Room 301',
      description: 'Collaborative problem-solving session with problems from various online judges.',
      difficulty: 'All Levels',
    },
    {
      id: 2,
      title: 'Algorithm Workshop: Dynamic Programming',
      type: 'Workshop',
      day: 'Wednesday',
      time: '5:00 PM - 7:00 PM',
      location: 'CS Building, Room 205',
      description: 'In-depth workshop covering DP patterns and optimization techniques.',
      difficulty: 'Intermediate',
    },
    {
      id: 3,
      title: 'Weekly Contest',
      type: 'Contest',
      day: 'Friday',
      time: '7:00 PM - 9:00 PM',
      location: 'Online (Virtual)',
      description: 'Competitive programming contest with prizes for top performers.',
      difficulty: 'All Levels',
    },
    {
      id: 4,
      title: 'Graph Algorithms Deep Dive',
      type: 'Workshop',
      day: 'Thursday',
      time: '4:00 PM - 6:00 PM',
      location: 'CS Building, Room 301',
      description: 'Explore advanced graph algorithms including shortest paths, MST, and flow networks.',
      difficulty: 'Advanced',
    },
    {
      id: 5,
      title: 'Beginner Study Group',
      type: 'Study Group',
      day: 'Tuesday',
      time: '3:00 PM - 5:00 PM',
      location: 'Library, Study Room B',
      description: 'Perfect for those just starting their competitive programming journey.',
      difficulty: 'Beginner',
    },
    {
      id: 6,
      title: 'Mock Interview Prep',
      type: 'Practice',
      day: 'Saturday',
      time: '2:00 PM - 4:00 PM',
      location: 'CS Building, Room 205',
      description: 'Practice coding interview questions with peer feedback.',
      difficulty: 'All Levels',
    },
  ];

  const typeColors: Record<string, string> = {
    Practice: 'bg-green-500/20 text-green-400 border-green-500/30',
    Workshop: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Contest: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Study Group': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  };

  const difficultyColors: Record<string, string> = {
    'All Levels': 'bg-slate-500/20 text-slate-400 border-slate-500/30',
    Beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
    Intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Advanced: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl mb-4 text-slate-100">Weekly Schedule</h1>
        <p className="text-xl text-slate-400">
          Join us for practice sessions, workshops, and competitions throughout the week.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={typeColors[event.type]}>
                      {event.type}
                    </Badge>
                    <Badge className={difficultyColors[event.difficulty]}>
                      {event.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-slate-100">{event.title}</CardTitle>
                  <CardDescription className="text-slate-400 mt-2">
                    {event.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>{event.day}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{event.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-blue-500/10 border-blue-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-100">
            <Users className="w-5 h-5 text-blue-400" />
            Office Hours
          </CardTitle>
        </CardHeader>
        <CardContent className="text-slate-300">
          <p className="mb-2">Need help with a problem or want to discuss algorithms?</p>
          <p>
            <strong className="text-slate-200">Monday - Friday:</strong> 12:00 PM - 2:00 PM
          </p>
          <p>
            <strong className="text-slate-200">Location:</strong> CS Building, Room 101
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
