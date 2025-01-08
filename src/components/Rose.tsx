import { useState } from "react";
import Tree from "react-d3-tree";
import "./FamilyTree.css"; // Ensure this is the correct CSS file name

const Rose = {
  name: "Kenneth Tran",
  children: [
    {
      name: "Daniel Li",
      children: [
        {
          name: "Aishwarya Ravishankar",
          children: [
            {
              name: "Alina Suon",
              children: [
                {
                  name: "Kevin Ho",
                  children: [
                    {
                      name: "Joshua Lao",
                    },
                  ],
                },
              ],
            },
            {
              name: "Sonali Verma",
            },
          ],
        },
        {
          name: "Ken Ny",
          children: [
            {
              name: "Bryan Le",
              children: [
                {
                  name: "Wendy Ha",
                  children: [
                    {
                      name: "Emily Marin",
                    },
                  ],
                },
              ],
            },
            {
              name: "Steven Arce",
              children: [
                {
                  name: "Chloee Gong",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Inessa Lopez",
      children: [
        {
          name: "Duy Nguyen",
          children: [
            {
              name: "Hector Ramirez",
              children: [
                {
                  name: "Jose Reyes",
                  children: [
                    {
                      name: "Sergio Garcia",
                      children: [
                        {
                          name: "Dylan Alejandre",
                        },
                        {
                          name: "Duy Phung",
                          children: [
                            {
                              name: "Konrad Hardy",
                            },
                            {
                              name: "Christopher Bui"
                            },
                          ],
                        },
                        {
                          name: "Kaleb Lee",
                          children: [
                            {
                              name: "Christian Vanegas",
                            },
                          ],
                        },
                        {
                          name: "Henry Hoang",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "Gaby Zavala",
                  children: [
                    {
                      name: "Mia Castro",
                      children: [
                        {
                          name: "Emma Bull",
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
            name: "Brandon Ta",
            children: [
              {
                name: "Jinya Yokoyama",
              },
            ],
          }
      ],
    },
  ],
};

export default function RoseTree() {
  const [nodeSize] = useState({
    x: 130, // horizontal size
    y: 120, // vertical size
  });

  const translate = {
    x: 950, // horizontal position for the tree
    y: 100, // vertical position for the tree
  };

  return (
    <div id="treeWrapper" style={{ width: "100vw", height: "100vh" }}> 
      <Tree
        data={Rose}
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