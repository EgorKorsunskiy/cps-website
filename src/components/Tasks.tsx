'use client'

import { useState } from 'react';
import { CheckCircle2, Circle, Clock, Trophy, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface Task {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  platform: string;
  link: string;
  status: 'completed' | 'in-progress' | 'not-started';
  points: number;
}

export function Tasks() {
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      category: 'Array',
      platform: 'LeetCode',
      link: '#',
      status: 'completed',
      points: 10,
    },
    {
      id: 2,
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      category: 'String',
      platform: 'LeetCode',
      link: '#',
      status: 'completed',
      points: 20,
    },
    {
      id: 3,
      title: 'Binary Tree Maximum Path Sum',
      difficulty: 'Hard',
      category: 'Tree',
      platform: 'LeetCode',
      link: '#',
      status: 'in-progress',
      points: 30,
    },
    {
      id: 4,
      title: 'Coin Change',
      difficulty: 'Medium',
      category: 'Dynamic Programming',
      platform: 'LeetCode',
      link: '#',
      status: 'not-started',
      points: 20,
    },
    {
      id: 5,
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      category: 'Stack',
      platform: 'LeetCode',
      link: '#',
      status: 'completed',
      points: 10,
    },
    {
      id: 6,
      title: 'Merge Intervals',
      difficulty: 'Medium',
      category: 'Array',
      platform: 'LeetCode',
      link: '#',
      status: 'not-started',
      points: 20,
    },
    {
      id: 7,
      title: 'Graph Valid Tree',
      difficulty: 'Medium',
      category: 'Graph',
      platform: 'LeetCode',
      link: '#',
      status: 'in-progress',
      points: 20,
    },
    {
      id: 8,
      title: 'Word Break II',
      difficulty: 'Hard',
      category: 'Dynamic Programming',
      platform: 'LeetCode',
      link: '#',
      status: 'not-started',
      points: 30,
    },
  ]);

  const difficultyColors = {
    Easy: 'bg-green-500/20 text-green-400 border-green-500/30',
    Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Hard: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  const statusIcons = {
    completed: <CheckCircle2 className="w-5 h-5 text-green-400" />,
    'in-progress': <Clock className="w-5 h-5 text-yellow-400" />,
    'not-started': <Circle className="w-5 h-5 text-slate-500" />,
  };

  const completedTasks = tasks.filter((t) => t.status === 'completed').length;
  const totalPoints = tasks.filter((t) => t.status === 'completed').reduce((sum, t) => sum + t.points, 0);
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl mb-4 text-slate-100">Practice Tasks</h1>
        <p className="text-xl text-slate-400">
          Track your progress through curated competitive programming problems.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-100">Problems Solved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-blue-400 mb-2">
              {completedTasks} / {tasks.length}
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-100">Total Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <span className="text-3xl text-yellow-400">{totalPoints}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-100">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-yellow-400">
              {tasks.filter((t) => t.status === 'in-progress').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-1">
                    {statusIcons[task.status]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Badge className={difficultyColors[task.difficulty]}>
                        {task.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-slate-400 border-slate-600">
                        {task.category}
                      </Badge>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{task.points} pts</span>
                    </div>
                    <CardTitle className="text-xl text-slate-100">{task.title}</CardTitle>
                    <CardDescription className="text-slate-400 mt-1">
                      Platform: {task.platform}
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Solve
                </Button>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-slate-100">Weekly Challenge</CardTitle>
        </CardHeader>
        <CardContent className="text-slate-300">
          <p className="mb-4">
            Complete at least 5 problems this week to earn a special badge and bonus points!
          </p>
          <div className="flex items-center gap-4">
            <Progress value={(completedTasks / 5) * 100} className="flex-1 h-3" />
            <span className="text-slate-400">{Math.min(completedTasks, 5)}/5</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
