import { useState } from "react";
import Tree from "react-d3-tree";
import "./FamilyTree.css";

const B2 = {
  name: "Mathew Major",
  children: [
    {
      name: "Gisselle Mondragon",
      children: [
        {
          name: "Tori McDonald",
        },
        {
          name: "Timothy Nguyen",
          children: [
            {
              name: "John Paul Isip",
              children: [
                {
                  name: "Adam Bhuiyan",
                  children: [
                    {
                      name: "Quan Nguyen",
                      children: [
                        {
                          name: "Annette Bradley",
                        },
                        {
                          name: "Kaiya Hayashida",
                          children: [
                            {
                              name: "Jonathan Kim",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "Brandon Ybarra",
                      children: [
                        {
                          name: "Justin Ghallager",
                        },
                        {
                          name: "Aaron Palean",
                          children: [
                            {
                              name: "Miguel Mier",
                              children: [
                                {
                                  name: "Grant Trazo",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Gisselle Frisby",
                          children: [
                            {
                              name: "Joshua Graves",
                            },
                          ],
                        },
                        {
                          name: "Cole White",
                          children: [
                            {
                              name: "Luna Blanchard",
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
              name: "Steven Toda",
              children: [
                {
                  name: "Joel Jimenez",
                  children: [
                    {
                      name: "Andrew Chavez",
                      children: [
                        {
                          name: "Axel Lopez",
                          children: [
                            {
                              name: "Isaiah Cardiel",
                              children: [
                                {
                                  name: "Roger Carrillo",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Benjamin Griffin",
                        },
                      ],
                    },
                    {
                      name: "Zari Salgado",
                      children: [
                        {
                          name: "Noel Chiapa",
                        },
                      ],
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
      name: "David Kwasman",
      children: [
        {
          name: "Zoey Jones",
          children: [
            {
              name: "Wesley Swanson",
              children: [
                {
                  name: "Valeria Lopez",
                },
                {
                  name: "Victor Jung",
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
    x: 1300, // horizontal position for the tree
    y: 100, // vertical position for the tree
  };

  return (
    <div id="treeWrapper" style={{ width: "100vw", height: "100vh" }}>
      <Tree
        data={B2}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        zoomable={false}
        draggable={false}
        enableLegacyTransitions={true}
        orientation={"vertical"}
        translate={translate} // Fixed translation for consistent placement
        nodeSize={nodeSize} // Fixed node size for consistent layout
      />
    </div>
  );
}
