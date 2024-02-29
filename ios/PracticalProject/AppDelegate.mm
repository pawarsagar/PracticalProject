#import "AppDelegate.h"
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import <TargetConditionals.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"PracticalProject";
  BOOL isSimulator = NO;
  
#if TARGET_OS_SIMULATOR
  isSimulator = YES;
#endif
  
  self.initialProps = @{
    @"isVirtualDevice": @(isSimulator)
  };
  

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
