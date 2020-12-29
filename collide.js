function collide(object1,object2) {


    if(object1.x-object2.x<=object2.width/2+object1.width/2+20 &&

        object2.x-object1.x<=object2.width/2+object1.width/2+20 &&

      object1.y-object2.y<=object2.height/2+object1.height/2+20 &&

      object2.y-object1.y<=object2.height/2+object1.height/2+20 

      )

     {

        object1.shapeColor = "red";

       object2.shapeColor = "dark red";

    }


    else{

        object1.shapeColor = "green";

      object2.shapeColor = "dark green";

    }

}