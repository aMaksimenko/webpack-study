import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDevelopment = options.mode === 'development';

    const cssLoader = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDevelopment ? "[path][name]__[local]" : "[hash:base64:5]",
            },
        }
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true
            }
        }],
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const styleLoader = {
        test: /\.module\.scss$/i,
        use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoader,
            "sass-loader"
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        svgLoader,
        assetsLoader,
        styleLoader,
        tsLoader,
    ]
}
