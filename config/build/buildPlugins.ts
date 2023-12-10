import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {Configuration, DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/types";
import BundleAnalyzerPlugin from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const {paths, analyzer, mode, platform} = options;
    const isProduction = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.template,
            favicon: path.resolve(paths.public, 'favicon.ico'),
        }),
        new ForkTsCheckerWebpackPlugin(),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        }),

    ]

    if (isProduction) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
        plugins.push(
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(paths.public, "locales"),
                        to: path.resolve(paths.output, "locales"),
                    },
                ],
            })
        )
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin.BundleAnalyzerPlugin());
    }

    return plugins;
}
