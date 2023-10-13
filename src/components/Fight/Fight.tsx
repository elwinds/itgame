import Modal from "../ui/modal/Modal";
import EnemyPreview from "./EnemyPreview/EnemyPreview";
import classes from "./Fight.module.scss";
import { useState } from "react";
import Fighting from "./Fighting/Fighting";
import { EnemiesKeys } from "../../store/modules/enemies/types";

const Fight = () => {
  const [hoverEnemy, setHoverEnemy] = useState<
    "project" | "backend" | "designer" | null
  >(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [choosedEnemy, setChoosedEnemy] = useState<EnemiesKeys | null>(null);

  const startBattle = (enemy: EnemiesKeys) => {
    setIsModalOpen(true);
    setChoosedEnemy(enemy);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>
        Кликните на противника, чтобы начать бой
      </h2>
      {hoverEnemy && <EnemyPreview name={hoverEnemy} />}
      <div className={classes.relative}>
        <div
          className={`${classes.circle} ${classes.one} ${
            hoverEnemy === "project" ? classes.stopAnimation : ""
          }`}
        >
          <div
            className={`${classes.circle} ${classes.inside}`}
            onMouseEnter={() => setHoverEnemy("project")}
            onMouseLeave={() => setHoverEnemy(null)}
            onClick={() => startBattle("project")}
          >
            <div className={classes.inside__container}>
              <img
                className={classes.inside__img}
                src={"/assets/images/avatars/project.png"}
                alt="your avatar"
              />
            </div>
          </div>
        </div>
        <div
          className={`${classes.circle} ${classes.two} ${
            hoverEnemy === "designer" ? classes.stopAnimation : ""
          }`}
        >
          <div
            className={`${classes.circle} ${classes.inside}`}
            onMouseEnter={() => setHoverEnemy("designer")}
            onMouseLeave={() => setHoverEnemy(null)}
            onClick={() => startBattle("designer")}
          >
            <div className={classes.inside__container}>
              <img
                className={classes.inside__img}
                src={"/assets/images/avatars/designer.png"}
                alt="your avatar"
              />
            </div>
          </div>
        </div>
        <div
          className={`${classes.circle} ${classes.three} ${
            hoverEnemy === "backend" ? classes.stopAnimation : ""
          }`}
        >
          <div
            className={`${classes.circle} ${classes.inside}`}
            onMouseEnter={() => setHoverEnemy("backend")}
            onMouseLeave={() => setHoverEnemy(null)}
            onClick={() => startBattle("backend")}
          >
            <div className={classes.inside__container}>
              <img
                className={classes.inside__img}
                src={"/assets/images/avatars/backend.png"}
                alt="your avatar"
              />
            </div>
          </div>
        </div>
        <div className={`${classes.circle} ${classes.four}`}>
          <img
            className={classes.four__img}
            src={"/assets/images/avatars/frontend.png"}
            alt="your avatar"
          />
        </div>
      </div>
      {isModalOpen && choosedEnemy && (
        <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
          <Fighting
            enemy={choosedEnemy}
            closeModal={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Fight;
