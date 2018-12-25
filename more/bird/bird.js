function Bird(){
    this.x = 75;
    this.y = b_height/2;
    this.velocity = 0;
    this.r = 18
    this.score = 0;
    this.inside = false;

    this.point = function(x){
        if(x){
            this.score += x;
        } else {
            this.score += 1;
        }
    }

    this.flap = function(){
        this.velocity = 10;
    }

    this.update = function(){
        this.velocity -= gravity;
        if(this.velocity < -15){
            this.velocity = -15;
        }
        this.y -= this.velocity;
    }

    this.show = function(){
        strokeWeight(0);
        fill('rgb(240, 200, 100)');
        translate(this.x, this.y);
        
        rotate(-this.velocity/10);
        
        ellipse(0, 0, this.r*2, this.r*2);
        strokeWeight(1);
        stroke(255);
        fill(0);
        ellipse(7, -2, 5, 5);
        //translate(0, 0);
        
    }
}

function Pipe(x, y){
    this.x = x;
    this.inside = false;
    
    if(y){
        this.y = y;
    } else {
        this.y = Math.random() * (b_height - p_gap * 2) + p_gap;
    }
    this.top_y = 

    this.update = function(){
        this.x = this.x-adjust;
    }

    this.show = function(){
        strokeWeight(0);
        fill('rgb(100, 255, 180)')
        rect(this.x, this.y, p_width, b_height - this.y);
        rect(this.x, this.y - p_gap, p_width, -b_height);
    }
    
    this.hits = function(){
        if(b.x >= this.x && b.x <= this.x + p_width){
            this.inside = true;
            if(dist(b.x, b.y, b.x, this.y) < b.r){
                return true;
            } else if (dist(b.x, b.y, b.x, this.y - p_gap) < b.r){
                return true;
            }
        } else if(this.inside == true){
            this.inside = false;
            b.point();
            console.log(b.score);
        } else if(b.y >= this.y || b.y <= this.y - p_gap){
            if(dist(b.x, b.y, this.x, b.y) < b.r){
                return true;
            } else if (dist(b.x, b.y, this.x + p_width, b.y) < b.r){
                return true;
            }
        }
    }

}

function Ground(){
    
    this.show = function() {
        strokeWeight(0);
        fill('rgb(180, 0, 150)')
        rect(0, b_height - 50, b_width, 100);
    }
}