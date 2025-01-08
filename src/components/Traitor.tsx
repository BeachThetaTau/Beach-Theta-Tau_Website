import { useState } from "react";
import Tree from "react-d3-tree";
import "./FamilyTree.css"; 

const Traitor = {
  name: "Kim-Wilson Holly Ngo",
  children: [
    {
      name: "Emmanuel Torres",
      children: [
        {
          name: "Emily Sanchez",
          children: [
            {
              name: "Mario Bajenting",
            },
            {
              name: "Carine Gordillo",
              children: [
                {
                  name: "Ashtyn Arthur",
                  children: [
                    {
                      name: "Citlaly Manjarrez",
                    },
                    {
                      name: "Alizah Laggui"
                    },
                    {
                      name: "Amara Whitson"
                    },
                  ],
                },
                {
                  name: "Luke Silva",
                },
              ],
            },
          ],
        },
        {
          name: "Bentley Chen",
          children: [
            {
              name: "Ada So",
            },
            {
              name: "An Ta",
            },
          ],
        },
      ],
    },
  ],
};

export default function TraitorTree() {
  const [nodeSize] = useState({
    x: 350, // horizontal size
    y: 120, // vertical size
  });

  const translate = {
    x: 950, // horizontal position for the tree
    y: 100, // vertical position for the tree
  };

  return (
    <div id="treeWrapper" style={{ width: "100vw", height: "100vh" }}>
      <Tree
        data={Traitor}
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
