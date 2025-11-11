import { useEffect } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";

const CharacterModel = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    const progress = setProgress((value) => setLoading(value));
    const img = new Image();
    img.src = "/portrait.png";
    img.onload = () => {
      progress.loaded();
    };
    img.onerror = () => {
      progress.loaded();
    };
  }, []);

  return (
    <div className="character-container">
      <div className="character-model character-model-photo">
        <div className="portrait-glow portrait-glow-warm"></div>
        <div className="portrait-glow portrait-glow-cool"></div>
        <img src="/portrait.png" alt="Narahari BN" className="portrait-image" />
      </div>
    </div>
  );
};

export default CharacterModel;
