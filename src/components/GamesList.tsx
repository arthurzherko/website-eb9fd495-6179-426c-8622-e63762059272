import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const games = [
  { title: 'Cyberpunk 2077', platform: 'PC / PS5', genre: 'RPG', image: '/games/cyberpunk.jpg' },
  { title: 'God of War Ragnarök', platform: 'PS5', genre: 'Action', image: '/games/gow.jpg' },
  { title: 'Counter-Strike 2', platform: 'PC', genre: 'Shooter', image: '/games/cs2.jpg' },
  { title: 'FIFA 24', platform: 'PC / PS5', genre: 'Спорт', image: '/games/fifa24.jpg' },
  // Добавьте больше игр по необходимости
];

export function GamesList() {
  return (
    <section className="bg-gamer-dark py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gamer-neon animate-glow">
          Доступные игры
        </h2>

        <ScrollArea className="h-[600px] rounded-lg border border-gamer-neon p-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {games.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-gamer-neon/50 bg-gamer-dark-accent">
                  <div className="h-full w-full bg-gradient-to-br from-gamer-purple/20 to-gamer-neon/20 p-4">
                    <h3 className="mb-2 text-xl font-bold text-white">{game.title}</h3>
                    <div className="space-x-2">
                      <Badge variant="outline" className="border-gamer-purple text-gamer-purple">
                        {game.platform}
                      </Badge>
                      <Badge variant="outline" className="border-gamer-neon text-gamer-neon">
                        {game.genre}
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
