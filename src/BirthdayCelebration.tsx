import { useEffect, useState } from "react";
import { Modal } from "antd";
import confetti from "canvas-confetti";

const BirthdayCelebration = () => {
  const [isModalVisible, setIsModalVisible] = useState(true); // State to control modal visibility

  const triggerConfetti = () => {
    const duration = 1.5 * 1000; // Duration of confetti animation
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 99999,
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      // Generate confetti from bottom left
      confetti({
        ...defaults,
        particleCount: 100,
        spread: 100,
        origin: { x: 0, y: 1 },
        angle: 60,
      });

      // Generate confetti from bottom right
      confetti({
        ...defaults,
        particleCount: 100,
        spread: 100,
        origin: { x: 1, y: 1 },
        angle: 120,
      });

      confetti({
        ...defaults,
        particleCount: 100,
        spread: 100,
        origin: { x: 0, y: 1 },
        angle: 60,
      });

      // Generate confetti from bottom right
      confetti({
        ...defaults,
        particleCount: 100,
        spread: 100,
        origin: { x: 1, y: 1 },
        angle: 120,
      });

      confetti({
        ...defaults,
        particleCount: 100,
        spread: 120, // Wider spread to make the confetti fall towards the middle
        origin: { x: 0, y: 0 }, // Start from the top-left
        angle: 45, // Falling diagonally to the middle
      });

      // Generate confetti from top right, falling towards the middle
      confetti({
        ...defaults,
        particleCount: 100,
        spread: 120, // Wider spread to make the confetti fall towards the middle
        origin: { x: 1, y: 0 }, // Start from the top-right
        angle: 135, // Falling diagonally to the middle
      });
    }, 250);
  };

  // Trigger confetti animation and modal on component mount
  useEffect(() => {
    triggerConfetti();
  }, []);

  // Function to handle modal close
  const handleOk = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      {/* Modal for "Happy Birthday Owner!" message */}
      <Modal
        open={isModalVisible}
        onOk={handleOk}
        closable={false}
        footer={null} // Hides the default footer with OK and Cancel buttons
        centered
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
            maxWidth: "80vw",
          }}
        >
          🎂 Happie Birthday's Owner! 🎉
        </p>
      </Modal>
    </>
  );
};

export default BirthdayCelebration;
