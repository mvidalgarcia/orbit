/* eslint-disable no-param-reassign */
function transformFlow(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // FlattenSimpleInterpolation -> InterpolationBase
  root.find(j.Identifier).forEach(path => {
    if (path.node.name === "FlattenSimpleInterpolation") {
      path.node.name = "InterpolationBase";
    }

    if (path.node.name === "FlattenInterpolation") {
      path.node.name = "Interpolation";
    }
  });

  // import React from "react" -> import * as React from "react"
  root
    .find(j.ImportDefaultSpecifier)
    .forEach(path => {
      if (path.node.local.name === "React") {
        j(path).replaceWith(j.importNamespaceSpecifier(j.identifier("React")));
      }
    })
    .toSource();

  // add type importKind
  // import { Props } -> import type { Props }
  root.find(j.ImportDeclaration).forEach(path => {
    if (path.node.specifiers[0].type !== "ImportNamespaceSpecifier") {
      if (path.node.id.name !== "defaultTheme" || path.node.id.name !== "React") {
        path.node.importKind = "type";
      }
    }
  });

  root.find(j.GenericTypeAnnotation).forEach(path => {
    const { id } = path.node;
    if (id.type === "QualifiedTypeIdentifier") {
      if (id.qualification.name === "React") {
        // React.SyntheticEvent -> SyntheticEvent
        // React.MouseEvent -> MouseEvent
        if (
          id.id.name === "SyntheticEvent" ||
          id.id.name === "MouseEvent" ||
          id.id.name === "KeyboardEvent" ||
          id.id.name === "FocusEvent" ||
          id.id.name === "ChangeEvent" ||
          id.id.name === "TouchEvent"
        ) {
          path.node.id = j.identifier(id.id.name);
        }
        // React.FunctionComponent -> React.ComponentType
        if (id.id.name === "FunctionComponent") {
          path.node.id = j.qualifiedTypeIdentifier(
            j.identifier("React"),
            j.identifier("ComponentType"),
          );
        }

        // React.FC -> React.StatelessFunctionalComponent
        if (id.id.name === "FC") {
          path.node.id = j.qualifiedTypeIdentifier(
            j.identifier("React"),
            j.identifier("StatelessFunctionalComponent"),
          );
        }

        // React.MutableRefObject -> React.Ref
        if (id.id.name === "MutableRefObject") {
          path.node.id = j.qualifiedTypeIdentifier(j.identifier("React"), j.identifier("Ref"));
        }

        // React.ForwardRefExoticComponent -> React.AbstractComponent
        if (id.id.name === "ForwardRefExoticComponent") {
          path.node.id = j.qualifiedTypeIdentifier(
            j.identifier("React"),
            j.identifier("AbstractComponent"),
          );
        }

        // React.ReactNode -> React.Node
        if (id.id.name === "ReactNode") {
          path.node.id = j.identifier("Node");
        }

        if (id.id.name === "ReactPortal") {
          path.node.id = j.identifier("Portal");
        }
      }
    }
  });

  return root.toSource();
}

module.exports = transformFlow;
