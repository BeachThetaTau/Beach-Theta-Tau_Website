import { useState } from "react";
import Tree from "react-d3-tree";
import "./FamilyTree.css"; 

const Instigator = {
  name: "Rocket Romano",
  children: [
    {
      name: "Autumn Nguyen",
      children: [
        {
          name: "Johnson Nguyen",
        },
        {
          name: "Bryan Vu",
          children: [
            {
              name: "Phong La",
              children: [
                {
                  name: "Bao Luong",
                },
              ],
            },
            {
              name: "Eric Tran",
              children: [
                {
                  name: "Phillip Chan",
                },
                {
                  name: "Mark Carson",
                },
              ],
            },
            {
              name: "Dylan Valley",
              children: [
                {
                  name: "Minh Pham-Nguyen",
                  children: [
                    {
                      name: "Joann Nguyen",
                    },
                  ],
                  
                },
                {
                  name: "Elise Weckwerth",
                  children: [
                    {
                      name: "Marvin Granados",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Christopher Yip",
      children: [
        {
          name: "Worth Bistline",
          children: [
            {
              name: "Trevor Reyna Norman",
              children: [
                {
                  name: "Jesus Luciano",
                  children: [
                    {
                      name: "Kevin Katz",
                      children: [
                        {
                          name: "Jesse Lopez",
                          children: [
                            {
                              name: "Justin Le",
                            },
                          ],
                        },
                        {
                          name: "Carlos Medina",
                          children: [
                            {
                              name: "Bryan Serrano",
                              children: [
                                {
                                  name: "Sam Lee",
                                  children: [
                                    {
                                      name: "Sroth Sinah",
                                      children: [
                                        {
                                          name: "Chintan Shah",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "Kaito Pearson",
                              children: [
                                {
                                  name: "Carson Cartagena",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "Cynthia Villasenor",
                },
              ],
            },
            {
              name: "Kiana Deghati",
              children: [
                {
                  name: "Abby Aquino",
                  children: [
                    {
                      name: "Duy Vu",
                    },
                  ],
                },
              ],
            },
            {
              name: "Miguel Huaman Vega",
              children: [
                {
                  name: "Jason Tran",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default function B2Tree() {
  const [nodeSize] = useState({
    x: 115, // horizontal size
    y: 120, // vertical size
  });

  const translate = {
    x: 900, // horizontal position for the tree
    y: 100, // vertical position for the tree
  };

  return (
    <div id="treeWrapper" style={{ width: "100vw", height: "125vh" }}> 
      <Tree
        data={Instigator}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        zoomable={false}
        draggable={false}
        enableLegacyTransitions={true}
        orientation={"vertical"}
        translate={translate} // translation for consistent placement
        nodeSize={nodeSize} // node size for consistent layout
      />
    </div>
  );
}