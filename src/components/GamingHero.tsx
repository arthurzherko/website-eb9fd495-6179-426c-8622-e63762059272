import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GamepadIcon, MonitorIcon, Clock } from 'lucide-react';

export function GamingHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gamer-dark p-6 lg:p-12">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-gamer-neon animate-glow md:text-6xl">
            Ultimate Gaming Zone
          </h1>
          <p className="mb-8 text-xl text-gray-300 md:text-2xl">
            Погрузись в мир игр на максимальных настройках
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg border border-gamer-neon bg-gamer-dark-accent p-6"
            >
              <MonitorIcon className="mx-auto mb-4 h-12 w-12 text-gamer-blue" />
              <h3 className="mb-2 text-xl font-bold text-gamer-blue">Топовые PC</h3>
              <p className="text-gray-400">RTX 4090, 32GB RAM, 240Hz</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg border border-gamer-purple bg-gamer-dark-accent p-6"
            >
              <GamepadIcon className="mx-auto mb-4 h-12 w-12 text-gamer-purple" />
              <h3 className="mb-2 text-xl font-bold text-gamer-purple">PlayStation 5</h3>
              <p className="text-gray-400">4K Gaming, DualSense, PS Plus</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg border border-gamer-red bg-gamer-dark-accent p-6"
            >
              <Clock className="mx-auto mb-4 h-12 w-12 text-gamer-red" />
              <h3 className="mb-2 text-xl font-bold text-gamer-red">24/7 Доступ</h3>
              <p className="text-gray-400">Играй в любое время</p>
            </motion.div>
          </div>

          <Button
            size="lg"
            className="mt-12 bg-gamer-neon text-gamer-dark hover:bg-gamer-neon/90"
          >
            Забронировать место
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
