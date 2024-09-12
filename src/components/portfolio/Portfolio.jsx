import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium cumque placeat necessitatibus incidunt repellat. Dolor deleniti fuga ad est praesentium eum aspernatur, earum fugiat itaque in ratione dolorem odit?",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium cumque placeat necessitatibus incidunt repellat. Dolor deleniti fuga ad est praesentium eum aspernatur, earum fugiat itaque in ratione dolorem odit?",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/28120118/pexels-photo-28120118/free-photo-of-o-quy-h-pass-in-sapa-vietnam.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium cumque placeat necessitatibus incidunt repellat. Dolor deleniti fuga ad est praesentium eum aspernatur, earum fugiat itaque in ratione dolorem odit?",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/27097735/pexels-photo-27097735/free-photo-of-treppe-stufen-schwarz-und-weiss-schwarzweiss.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium cumque placeat necessitatibus incidunt repellat. Dolor deleniti fuga ad est praesentium eum aspernatur, earum fugiat itaque in ratione dolorem odit?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffnes: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
