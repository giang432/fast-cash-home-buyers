interface LogoProps {
  className?: string;
  height?: number;
  color?: string;
}

export function Logo({ className = "", height = 45, color = "white" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 80"
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* House roof */}
      <path
        d="M5 40L50 8L75 26V15H85V33L95 40H85V42H78L50 20L22 42H15V40H5Z"
        fill={color}
      />

      {/* House body */}
      <path
        d="M22 42V70H42V52H58V70H78V42L50 20L22 42Z"
        fill={color}
      />

      {/* Window squares */}
      <rect x="48" y="28" width="4" height="4" fill={color} opacity="0.9" />
      <rect x="54" y="28" width="4" height="4" fill={color} opacity="0.9" />
      <rect x="48" y="34" width="4" height="4" fill={color} opacity="0.9" />
      <rect x="54" y="34" width="4" height="4" fill={color} opacity="0.9" />

      {/* Swoosh curve */}
      <path
        d="M8 55C8 55 25 70 50 65C75 60 92 48 92 48C92 48 78 62 50 68C22 74 8 55 8 55Z"
        fill={color}
        opacity="0.85"
      />

      {/* Dollar sign */}
      <g transform="translate(68, 35)">
        <circle cx="10" cy="10" r="12" fill={color} />
        <text
          x="10"
          y="15"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#1a365d"
          fontFamily="Arial, sans-serif"
        >
          $
        </text>
      </g>
    </svg>
  );
}
