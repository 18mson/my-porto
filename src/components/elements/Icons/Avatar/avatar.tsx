function AvatarIcon() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" fill="#4A90E2" r="80" />
      <circle cx="100" cy="80" fill="#F5D6B4" r="30" />
      <circle cx="90" cy="75" fill="#333" r="4" />
      <circle cx="110" cy="75" fill="#333" r="4" />
      <path d="M 90 95 Q 100 105, 110 95" fill="none" stroke="#333" stroke-width="3" />
      <rect fill="#2C3E50" height="50" rx="10" width="60" x="70" y="110" />
    </svg>
  );
}

export default AvatarIcon;