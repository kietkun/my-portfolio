import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Full-stack Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        ' Back-end Developer',
        1500,
        ' Programmer',
        1500,
        ' Runner',
        1500
      ]}
      speed={50}
      className='text-[1.5rem] md:text-[2.3rem] text-cyan-500 font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;