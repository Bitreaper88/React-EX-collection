 printPosition_old(){
        // This is now depricated
        //This is super ugly, There has to be a better way
        let y = 0;
        for (y = 0; y < 10; y++) {
            let sl: string = "";
            let x = 0;
            for (x = 0; x < 10; x++) {
                let icon: string = "";
                let traveled: Boolean = false;
                this.posLog.forEach(pos => { if( x === pos.x && y === pos.y) traveled=true  });
                
                if (traveled) icon = "*";
                else icon = "-";
                
                if(this.position.x === x && this.position.y === y) icon = "R";
                sl += ` ${icon} `;
            }
            console.log(sl);        
        }
       // console.log(`${this.name} position: ${this.position.x}, ${this.position.y}, heading: ${Compass[this.direction]}`)
    }
