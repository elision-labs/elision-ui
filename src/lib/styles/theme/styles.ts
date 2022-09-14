import { StyleConfig, SystemStyleObject } from "@chakra-ui/react";
import {GlobalStyleProps, Styles} from "@chakra-ui/theme-tools";

export const styles: Styles = {
    global: (props: GlobalStyleProps): SystemStyleObject => ({
        header: {
            bg: "#1f1f1f",
        },
        body: {
            bg: "#1f1f1f"
        },
        h1: {
            fontWeight: 200,
            fontSize: {
                base: '2.25em',
                md: '3.00em',
            },
            color: "elision.100",
            marginBottom: 4
        },
    }),
}