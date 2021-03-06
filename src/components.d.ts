/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WebTooltip {
        "text": string;
    }
}
declare global {
    interface HTMLWebTooltipElement extends Components.WebTooltip, HTMLStencilElement {
    }
    var HTMLWebTooltipElement: {
        prototype: HTMLWebTooltipElement;
        new (): HTMLWebTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "web-tooltip": HTMLWebTooltipElement;
    }
}
declare namespace LocalJSX {
    interface WebTooltip {
        "text"?: string;
    }
    interface IntrinsicElements {
        "web-tooltip": WebTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "web-tooltip": LocalJSX.WebTooltip & JSXBase.HTMLAttributes<HTMLWebTooltipElement>;
        }
    }
}
