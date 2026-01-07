import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CharacterModal.css";

export default function CharacterModal({ character, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {character && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button className="modal-close" onClick={onClose}>
              ✕
            </button>

            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.power}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
