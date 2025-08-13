import './Placeholder.css'
import { motion } from 'motion/react';

function Spinner({ size = 48, strokeWidth = 4, color = '#6b7280' }) {
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="spinner"
    >
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        // 1 short dash + long gap = arc that spins
        strokeDasharray={`${c * 0.25} ${c}`}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
      />
    </motion.svg>
  );
}

type PlaceholderProps = {
  name: string;
};

export default function Placeholder({ name }: PlaceholderProps) {
  return (
    <div className="account-page">
      <h1>{name} Page</h1>
      {/* <p>This is where users can manage their account settings.</p> */}
      <p>More features will be added soon!</p>

      {/* replace your broken motion.div with this */}
      <Spinner />
    </div>
  );
}
