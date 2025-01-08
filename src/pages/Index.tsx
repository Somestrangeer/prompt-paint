import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { useState } from "react";

const Index = () => {
  const [prompt, setPrompt] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-primary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Header />
      
      <main className="pt-24 px-6">
        <motion.section 
          className="max-w-7xl mx-auto mb-20"
          variants={itemVariants}
        >
          <motion.div
            className="bg-secondary/5 backdrop-blur-sm rounded-lg p-8 border border-secondary/20"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 
              className="text-secondary text-2xl mb-6 font-light"
              variants={itemVariants}
            >
              Создайте свою диаграмму
            </motion.h2>
            
            <motion.textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-40 bg-primary border border-secondary/20 rounded-lg p-4 text-secondary resize-none focus:outline-none focus:border-accent transition-all duration-300"
              placeholder="Опишите вашу диаграмму..."
              variants={itemVariants}
              whileFocus={{ scale: 1.01 }}
            />
            
            <motion.div
              className="mt-8 p-8 border border-dashed border-secondary/20 rounded-lg min-h-[400px] flex items-center justify-center"
              variants={itemVariants}
              whileHover={{ borderColor: "rgba(236, 236, 236, 0.4)", scale: 1.01 }}
            >
              <p className="text-secondary/60">Здесь появится ваша диаграмма</p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          className="max-w-7xl mx-auto pb-20"
          variants={itemVariants}
        >
          <motion.h2
            className="text-secondary text-3xl mb-12 font-light text-center"
            variants={itemVariants}
          >
            Как составить эффективный промпт
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {examples.map((example, index) => (
              <motion.div
                key={index}
                className="bg-secondary/5 backdrop-blur-sm rounded-lg p-6 border border-secondary/20"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <span className="text-accent text-sm uppercase tracking-wider">
                    Пример {index + 1}
                  </span>
                  <p className="text-secondary mt-2">{example.prompt}</p>
                </div>
                <div className="aspect-video bg-primary/50 rounded-lg flex items-center justify-center">
                  <p className="text-secondary/60">Результат диаграммы</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
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