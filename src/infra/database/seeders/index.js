import Database from "../index.js";
import seedSport from "./20250817023249-demo-sport.cjs";
import seedRecreationAreaType from "./20250817041600-demo-recreation-area-type.cjs";
import seedUserRole from "./20250817125936-demo-user-role.cjs";
import seedUser from "./20250817195706-demo-user.cjs";
import seedEstablishment from "./20250817195252-demo-establishment.cjs";

const allSeeds = [
  seedSport,
  seedRecreationAreaType,
  seedUserRole,
  seedUser,
  seedEstablishment,
];

const reverseSeeds = [...allSeeds].reverse();

async function runSeeds() {
  const queryInterface = Database.getQueryInterface();

  try {
    for (const seed of allSeeds) {
      await seed.up(queryInterface);
      console.log(`Seed ${seed.name || seed.toString()} executed`);
    }
    console.log("All seeds executed successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

async function undoSeeds() {
  const queryInterface = Database.getQueryInterface();

  try {
    for (const seed of reverseSeeds) {
      await seed.down(queryInterface);
      console.log(`Seed ${seed.name || seed.toString()} reverted`);
    }
    console.log("All seeds reverted successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seed revert error:", error);
    process.exit(1);
  }
}

const command = process.argv[2];

if (command === "--undo" || command === "-u") {
  undoSeeds();
} else {
  runSeeds();
}
