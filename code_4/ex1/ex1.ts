let count: number = 3;

function countDown() {
    switch (count) {
        case 3: {
            console.log("3");
            break;
        }
        case 2: {
            console.log("2");
            break;
        }
        case 1: {
            console.log("1");
            //break; 
        }
        default: {
            console.log("GO!");
            break;
        }
    }
    count--;
    if (0 < count) setTimeout(countDown, 1000);    
}

countDown();