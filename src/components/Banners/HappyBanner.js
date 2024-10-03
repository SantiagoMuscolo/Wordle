function HappyBanner({ length }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{length} guesses</strong>.
      </p>
    </div>
  );
};

export default HappyBanner;