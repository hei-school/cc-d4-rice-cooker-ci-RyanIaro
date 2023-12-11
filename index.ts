import * as readlineSync from 'readline-sync';

class RiceCooker {
  private cookingStatus: "cooking" | "finished" | "idle" = "idle";
  private warmMode: boolean = false;
  private hasRice: boolean = false;
  private hasWater: boolean = false;
  private cookingTimer: NodeJS.Timeout | null = null;

  plug(): void {
    console.log("Welcome to the Rice Cooker Program!");

    while (true) {
      console.log("\nSay hello to your rice cooker. What do you want to do?");
      console.log("1. Open the rice cooker");
      console.log("2. Check cooking status");
      console.log("3. Keep warm");
      console.log("4. Interrupt/Resume cooking");
      console.log("5. Unplug the rice cooker (Exit)");

      const choice = readlineSync.question(": ");

      switch (choice) {
        case "1":
          this.open();
          break;
        case "2":
          this.checkCookingStatus();
          break;
        case "3":
          const duration = parseInt(readlineSync.question("Enter the duration for Keep Warm (in minutes): "));
          this.keepWarm(duration);
          break;
        case "4":
          this.interruptOrResumeCooking();
          break;
        case "5":
          this.unplug();
          break;
        default:
          console.log("Invalid choice. Please enter a number between 1 and 5.");
          break;
      }
    }
  }

  open(): void {
    while (true) {
      console.log("\nYou open the rice cooker, now what?");
      console.log("1. Add rice");
      console.log("2. Add water");
      console.log("3. Remove rice");
      console.log("4. Remove water");
      console.log("5. Start cooking");
      console.log("6. Close the rice cooker");

      const choice = readlineSync.question(": ");

      switch (choice) {
        case "1":
          this.addRice();
          break;
        case "2":
          this.addWater();
          break;
        case "3":
          this.removeRice();
          break;
        case "4":
          this.removeWater();
          break;
        case "5":
          this.startCooking();
          break;
        case "6":
          return; // Close the rice cooker and go back to the plug() prompt
        default:
          console.log("Invalid choice. Please enter a number between 1 and 6.");
          break;
      }
    }
  }
  
    private addRice(): void {
        if (this.hasRice === false) {
            this.hasRice = true;
            console.log("You add rice to the rice cooker.");            
        } else {
            console.log("There is already rice inside");
        }
    }
  
    private addWater(): void {
        if (this.hasWater === false) {
            this.hasWater = true;
            console.log("You add water to the rice cooker.");            
        } else {
            console.log("There is already water inside");
        }
    }
  
    private removeRice(): void {
        if (this.hasRice === true) {
            this.hasRice = false;
            console.log("You removed the rice from the rice cooker.");
        } else {
            console.log("There is nothing to remove.");
        }
    }
  
    private removeWater(): void {
        if (this.hasWater === true) {
            this.hasWater = false;
            console.log("Water removed from the rice cooker.");
        } else {
            console.log("There is nothing to remove.");
        }
    }
  
    private startCooking(): void {
      if (this.hasRice && this.hasWater) {

        this.cookingStatus = "cooking";
        this.hasWater = false;
        console.log("Cooking started. Come back in 2 minutes.");
        this.cookingTimer = setTimeout(() => this.finishCooking(), 120000); // 2 minutes

      } else if (!this.hasRice && this.hasWater) {

        this.cookingStatus = "cooking";
        console.log("Boiling started. Come back in 1 minutes.");
        this.cookingTimer = setTimeout(() => this.finishCooking(), 60000); // 1 minute

      } else {
        console.log("You can't cook air. Please add rice and/or water inside first.");

      }
    }
  
    private finishCooking(): void {
      this.cookingStatus = "finished";
      console.log("The cooking is complete. Please take out the rice/water.");
      this.cookingTimer = null;
    }
  
    interruptOrResumeCooking(): void {
      if (this.cookingStatus === "cooking") {
        this.interruptCooking();
      } else if (this.cookingStatus === "idle") {
        if (this.hasRice || this.hasWater) {
          this.startCooking();
        } else {
          console.log("You already cooked something inside.");
        }
      }
    }
  
    private interruptCooking(): void {
      if (this.cookingTimer) {
        clearTimeout(this.cookingTimer);
        this.cookingStatus = "idle";
        console.log("Cooking interrupted. Rice cooker is now idle.");
        this.cookingTimer = null;
      }
    }
  
    keepWarm(duration: number): void {
      if (this.cookingStatus === "finished" && !this.warmMode) {
        this.warmMode = true;
        console.log(`Keep Warm mode activated. Keeping warm for ${duration} minutes.`);
        setTimeout(() => this.disableWarmMode(), duration * 60000);
      } else {
        console.log("Keep Warm mode can only be activated after cooking is complete.");
      }
    }
  
    private disableWarmMode(): void {
        if (this.warmMode) {
            this.warmMode = false;
            console.log("Keep Warm mode deactivated.");
        } else {
            console.log("Keep Warm mode is not active.");
        }
    }
  
    unplug(): void {
      console.log("You unplug the Rice cooker.");
      process.exit();
    }
  
    checkCookingStatus(): void {
      console.log(`Current cooking status: ${this.cookingStatus}`);
    }
  }
  
  
  const riceCooker = new RiceCooker();
  riceCooker.plug();