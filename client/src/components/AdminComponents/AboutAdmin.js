import React from "react";
import { Link } from "react-router-dom";

export default function AboutAdmin() {
  return (
    <div className="same-component">
      <br />
      <div class="same-forme">
        <form action="">
          <h4>About Component</h4>
          <label htmlFor="text">About</label>
          <textarea name="textarea" id="" cols="30" rows="3"></textarea>
          <button type="submit">Add item</button>
        </form>
      </div>

      <div class="same-item">
        <div class="about-info">
          <div class="icons">
            <Link to={"/edit"}>
             
              <i className="fas fa-edit"></i>
            </Link>
            <i class="fas fa-trash"></i>
          </div>

          <p>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
            ante et sem feugiat varius sit amet non felis. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nullam ac justo sed dui venenatis viverra vitae nec orci. Cras ac
            lectus id lectus euismod faucibus id quis sapien. Nunc dignissim a
            tellus id tristique. Nam sapien metus, iaculis at nibh a, posuere
            placerat libero. In volutpat, mauris sed cursus eleifend, leo diam
            laoreet lorem, nec ullamcorper diam velit ac eros. Fusce nec
            dignissim metus.
          </p>

        </div>
      </div>

      <h3 className="item-delete-tab">item delted</h3>
    </div>
  );
}
