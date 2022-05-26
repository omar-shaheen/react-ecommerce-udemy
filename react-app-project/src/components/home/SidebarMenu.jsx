import React, { Component } from "react";

export class SidebarMenu extends Component {

  constructor() {
    super();
    this.Menu = this.Menu.bind(this);
  }

  componentDidMount() {
    this.Menu();
  }

  Menu() {
    var acc = document.querySelectorAll(".accordion");

    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

  render() {
    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">
          <button className="accordion">
            <img className="accordionMenuIcon" src="test.png" /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Tv Units
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img className="accordionMenuIcon" src="test.png" /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Tv Units
                </a>
              </li>
            </ul>
          </div>
          
          <button className="accordion">
            <img className="accordionMenuIcon" src="test.png" /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Tv Units
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img className="accordionMenuIcon" src="test.png" /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Tv Units
                </a>
              </li>
            </ul>
          </div>
          
          <button className="accordion">
            <img className="accordionMenuIcon" src="test.png" /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Tv Units
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img className="accordionMenuIcon" src="test.png" /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Tv Units
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarMenu;
