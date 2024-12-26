import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { useState } from "react";

const Index = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      <main className="pt-24 px-6">
        {/* Main Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-secondary/5 backdrop-blur-sm rounded-lg p-8 border border-secondary/20"
          >
            <h2 className="text-secondary text-2xl mb-6 font-light">Создайте свою диаграмму</h2>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-40 bg-primary border border-secondary/20 rounded-lg p-4 text-secondary resize-none focus:outline-none focus:border-accent transition-colors duration-300"
              placeholder="Опишите вашу диаграмму..."
            />
            
            <motion.div
              className="mt-8 p-8 border border-dashed border-secondary/20 rounded-lg min-h-[400px] flex items-center justify-center"
              whileHover={{ borderColor: "rgba(236, 236, 236, 0.4)" }}
            >
              <p className="text-secondary/60">Здесь появится ваша диаграмма</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Tips Section */}
        <section className="max-w-7xl mx-auto pb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-secondary text-3xl mb-12 font-light text-center"
          >
            Как составить эффективный промпт
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary/5 backdrop-blur-sm rounded-lg p-6 border border-secondary/20"
              >
                <div className="mb-4">
                  <span className="text-accent text-sm uppercase tracking-wider">Пример {index + 1}</span>
                  <p className="text-secondary mt-2">{example.prompt}</p>
                </div>
                <div className="aspect-video bg-primary/50 rounded-lg flex items-center justify-center">
                  <p className="text-secondary/60">Результат диаграммы</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const examples = [
  {
    prompt: "Создай диаграмму последовательности для процесса авторизации пользователя",
  },
  {
    prompt: "Построй блок-схему алгоритма сортировки массива",
  },
  {
    prompt: "Нарисуй ER-диаграмму для системы управления библиотекой",
  },
  {
    prompt: "Сгенерируй диаграмму классов для игры в шахматы",
  },
];

export default Index;