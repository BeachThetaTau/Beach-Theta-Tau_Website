import { useState } from "react";
import Tree from "react-d3-tree";
import "./FamilyTree.css"; 

const RoyalTigers = {
  name: "Jasdeep Shangari",
  children: [
    {
      name: "Carlos Lazzo",
      children: [
        {
          name: "Danny Vu",
          children: [
            {
              name: "David Cuevas",
            },
            {
              name: "Joseph McConico",
              children: [
                {
                  name: "Tevin Mak",
                  children: [
                    {
                      name: "Adrian Vera",
                    },
                    {
                        name: "Erick Calero",
                        children: [
                          {
                            name: "Dominique Chilvers",
                            children: [
                              {
                                name: "Joshua Gonzalez"
                              }
                            ]
                          }
                        ]
                      }
                  ],
                },
              ],
            },
            {
              name: "Dominic Alfonso",
              children: [
                {
                  name: "Valeria Contreras",
                },
              ],
            },
            {
              name: "Wesly Rowley",
              children: [
                {
                  name: "Matthew Choi",
                },
              ],
            },
            {
              name: "Alexandra Awdow",
            },
          ],
        },
      ],
    },
    {
      name: "Andres Martinez",
      children: [
        {
          name: "Giovani Ramirez",
        },
      ],
    },
  ],
};

export default function RoyalTigersTree() {
  const [nodeSize] = useState({
    x: 250, // horizontal size
    y: 120, // vertical size
  });

  const translate = {
    x: 1150, // horizontal position for the tree
    y: 100, // vertical position for the tree
  };

  return (
    <div id="treeWrapper" style={{ width: "100vw", height: "100vh" }}>
      <Tree
        data={RoyalTigers}
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