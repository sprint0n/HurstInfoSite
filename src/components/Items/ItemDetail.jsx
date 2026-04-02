import TerraGourdSeeds from "../../assets/TerraGourdSeeds.png";
import SmolderingRoseSeeds from "../../assets/SmolderingRoseSeeds.png";
import ZephyrLilySeeds from "../../assets/ZephyrLilySeeds.png";
import TeardropBerrySeeds from "../../assets/TeardropBerrySeeds.png";

import TerraGourd from "../../assets/TerraGourd.png";
import SmolderingRose from "../../assets/SmolderingRose.png";
import ZephyrLily from "../../assets/ZephyrLily.png";
import TeardropBerry from "../../assets/TeardropBerry.png";

import TerraSoup from "../../assets/TerraSoup.png";
import IfritPopRocks from "../../assets/IfritPopRocks.png";
import SylphTea from "../../assets/SylphTea.png";
import TeardropSpirits from "../../assets/TeardropSpirits.png";

import IronAcorn from "../../assets/IronAcorn.png";
import FrostedMushroom from "../../assets/FrostedMushroom.png";
import HarmonicGrapes from "../../assets/HarmonicGrapes.png";
import SymphonicBerries from "../../assets/SymphonicBerries.png";
import WarpTotem from "../../assets/MistgroveWarpTotem.png";
import WarpTotemAnimation from "../../assets/WarpTotemAnimation.gif";
import classes from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
const ItemDetail = ({ details }) => {
  const itemImages = {
    "Terra Gourd Seeds": TerraGourdSeeds,
    "Smoldering Rose Seeds": SmolderingRoseSeeds,
    "Zephyr Lily Seeds": ZephyrLilySeeds,
    "Teardrop Berry Seeds": TeardropBerrySeeds,
    "Terra Gourd": TerraGourd,
    "Smoldering Rose": SmolderingRose,
    "Zephyr Lily": ZephyrLily,
    "Teardrop Berry": TeardropBerry,
    "Terra Soup": TerraSoup,
    "Ifrit Pop Rocks": IfritPopRocks,
    "Sylph Tea": SylphTea,
    "Teardrop Spirits": TeardropSpirits,
    "Iron Acorn": IronAcorn,
    "Frosted Mushroom": FrostedMushroom,
    "Harmonic Grapes": HarmonicGrapes,
    "Symphonic Berries": SymphonicBerries,
    "Warp Totem: Mistgrove": WarpTotem,
  };
  const isWarpTotem = details.Name === "Warp Totem: Mistgrove";
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>{details.Name}</h1>
        <Link to="/Items" className={classes.backLink}>
          Back to Items
        </Link>
      </header>

      <div className={classes.contentGrid}>
        <div className={classes.textSection}>
          <div className={classes.infoBlock}>
            <h4>Acquisition</h4>
            <p>{details.Acquisition}</p>
          </div>

          <div className={classes.infoBlock}>
            <h4>Effect & Usage</h4>
            <p className={classes.tooltip}>"{details.Tooltip}"</p>
            <p>{details.Uses}</p>
          </div>

          <div className={classes.infoBlock}>
            <h4>Lore</h4>
            <p className={classes.loreText}>{details.Lore}</p>
          </div>
        </div>

        <div className={classes.imageSection}>
          <img
            src={itemImages[details.Name]}
            alt={details.Name}
            className={classes.itemImg}
          />

          {isWarpTotem && (
            <div className={classes.animationBox}>
              <h5>Configurable Animation:</h5>
              <img
                src={WarpTotemAnimation}
                alt="Warp Totem Animation"
                className={classes.animImg}
              />
            </div>
          )}

          {details.LootPool && (
            <div className={classes.lootBox}>
              <h5>Possible Loot:</h5>
              {typeof details.LootPool === "object" ? (
                Object.values(details.LootPool).map((lootItem, index) => (
                  <p key={index}>{lootItem}</p>
                ))
              ) : (
                <p>{details.LootPool}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
