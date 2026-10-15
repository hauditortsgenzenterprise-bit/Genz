import React from 'react';

interface CompanyLogoProps {
  className?: string;
  variant?: 'full' | 'header' | 'symbol';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  className = '',
  variant = 'header',
  theme = 'dark',
  size = 'md',
}) => {
  // Height presets
  const heightClasses = {
    sm: variant === 'symbol' ? 'h-8 w-8' : 'h-8',
    md: variant === 'symbol' ? 'h-10 w-10' : 'h-10',
    lg: variant === 'symbol' ? 'h-14 w-14' : 'h-14',
    xl: variant === 'symbol' ? 'h-20 w-20' : 'h-20',
  }[size];

  const isLight = theme === 'light';
  const textPrimary = isLight ? '#0a2342' : '#ffffff';
  const textSecondary = isLight ? '#1e293b' : '#cbd5e1';
  const taglineColor = isLight ? '#475569' : '#94a3b8';
  const dividerColor = isLight ? '#cbd5e1' : '#334155';

  if (variant === 'symbol') {
    return (
      <svg
        viewBox="0 0 250 200"
        className={`${heightClasses} ${className} shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Gen Z Enterprise Symbol"
      >
        <defs>
          <linearGradient id="gzBlueGradSym" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#0a2342" />
          </linearGradient>

          <linearGradient id="gzOrangeGradSym" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          <filter id="symGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
          </filter>
        </defs>

        <g transform="translate(10, 5)">
          {/* Orange Letter Z */}
          <path
            d="M 125,50 L 195,50 L 195,68 L 138,135 L 205,135 L 205,155 L 115,155 L 115,138 L 175,68 L 125,68 Z"
            fill="url(#gzOrangeGradSym)"
          />

          {/* Blue Letter G */}
          <path
            d="M 115,35 
               C 70,35 32,65 32,105 
               C 32,145 70,175 115,175 
               C 135,175 152,168 165,158 
               L 150,140 
               C 140,148 128,153 115,153 
               C 85,153 56,132 56,105 
               C 56,78 85,57 115,57 
               C 132,57 146,64 156,75 
               L 174,58 
               C 159,44 138,35 115,35 Z"
            fill="url(#gzBlueGradSym)"
          />

          {/* G's inner horizontal bar */}
          <path
            d="M 105,95 L 155,95 L 155,115 L 125,115 L 125,128 L 105,128 Z"
            fill="url(#gzBlueGradSym)"
          />

          {/* Ascending Swoosh Curve */}
          <path
            d="M 22,125 
               C 25,155 55,182 105,180 
               C 140,178 175,150 205,100 
               L 218,80 
               C 185,130 145,160 102,160 
               C 65,160 40,140 38,125 Z"
            fill="url(#gzOrangeGradSym)"
          />

          {/* Upward Growth Arrow Head */}
          <polygon
            points="195,85 240,40 215,95 210,75"
            fill="url(#gzOrangeGradSym)"
            filter="url(#symGlow)"
          />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox={variant === 'full' ? '0 0 660 180' : '0 0 540 145'}
      className={`${heightClasses} ${className} shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gen Z Enterprise Official Logo"
    >
      <defs>
        {/* Blue Gradient for G */}
        <linearGradient id={`gzBlueGrad-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#0a2342" />
        </linearGradient>

        {/* Orange Gradient for Z & Arrow */}
        <linearGradient id={`gzOrangeGrad-${theme}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>

        <filter id={`gzDropShadow-${theme}`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Symbol Left */}
      <g transform="translate(10, 5)">
        {/* Letter Z (Orange - back) */}
        <path
          d="M 125,48 L 195,48 L 195,66 L 138,133 L 205,133 L 205,153 L 115,153 L 115,136 L 175,66 L 125,66 Z"
          fill={`url(#gzOrangeGrad-${theme})`}
        />

        {/* Letter G (Blue - front) */}
        <path
          d="M 115,35 
             C 70,35 32,65 32,105 
             C 32,145 70,175 115,175 
             C 135,175 152,168 165,158 
             L 150,140 
             C 140,148 128,153 115,153 
             C 85,153 56,132 56,105 
             C 56,78 85,57 115,57 
             C 132,57 146,64 156,75 
             L 174,58 
             C 159,44 138,35 115,35 Z"
          fill={`url(#gzBlueGrad-${theme})`}
        />

        {/* G's inner horizontal crossbar */}
        <path
          d="M 105,95 L 155,95 L 155,115 L 125,115 L 125,128 L 105,128 Z"
          fill={`url(#gzBlueGrad-${theme})`}
        />

        {/* Dynamic Swoosh Wrapping from Bottom-Left */}
        <path
          d="M 22,125 
             C 25,155 55,182 105,180 
             C 140,178 175,150 205,100 
             L 218,80 
             C 185,130 145,160 102,160 
             C 65,160 40,140 38,125 Z"
          fill={`url(#gzOrangeGrad-${theme})`}
        />

        {/* Arrow Head */}
        <polygon
          points="195,85 240,40 215,95 210,75"
          fill={`url(#gzOrangeGrad-${theme})`}
          filter={`url(#gzDropShadow-${theme})`}
        />
      </g>

      {/* Vertical Divider */}
      <line
        x1="260"
        y1="38"
        x2="260"
        y2="152"
        stroke={dividerColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Right Wordmark Text */}
      <g transform="translate(285, 0)">
        {/* GEN Z */}
        <text
          x="0"
          y="84"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="52"
          letterSpacing="1"
        >
          <tspan fill={textPrimary}>GEN </tspan>
          <tspan fill="url(#gzOrangeGrad-dark)">Z</tspan>
        </text>

        {/* ENTERPRISE */}
        <text
          x="3"
          y="118"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="23"
          fill={textSecondary}
          letterSpacing="7"
        >
          ENTERPRISE
        </text>

        {/* Tagline */}
        {variant === 'full' && (
          <text
            x="4"
            y="146"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="500"
            fontSize="14"
            letterSpacing="1.2"
          >
            <tspan fill={taglineColor}>Ideas Today</tspan>
            <tspan fill={dividerColor}>  |  </tspan>
            <tspan fill={taglineColor}>Growth Tomorrow</tspan>
          </text>
        )}
      </g>
    </svg>
  );
};
