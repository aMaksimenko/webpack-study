export interface BuildPaths {
    entry: string;
    template: string;
    output: string;
    src: string;
    public: string;
}

export type BuildMode = 'development' | 'production';

export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    analyzer?: boolean;
    platform: BuildPlatform;
}
